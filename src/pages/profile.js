import { useRef, useState } from "react";
import { AiOutlineCamera, AiOutlineStar } from "react-icons/ai";
import { useAuth } from "../contexts/auth";
import { bucket } from "../firebase";
import firebase from "firebase";
import { CgLock } from "react-icons/cg";

export default function Profile() {
  const fileupload = useRef(null);
  const [file, setFile] = useState();
  const [perc, setPerc] = useState();
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  const updateProfilePic = (file) => {
    let uploadTask = bucket.child(`profiles/${currentUser.uid}`).put(file);
    uploadTask.on(
      "state_changed",
      function (snapshot) {
        setPerc((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
            break;
          case firebase.storage.TaskState.RUNNING:
            break;
        }
      },
      function (error) {
        setLoading(false);
        setFile();
      },
      function () {
        setLoading(false);
        setFile();
        setPerc();
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          currentUser.updateProfile({ photoURL: downloadURL });
        });
      }
    );
  };
  const handle_upload = () => {
    if (file) {
      console.log(file);
      setLoading(true);
      updateProfilePic(file);
    } else {
      fileupload.current.click();
    }
  };

  return (
    <>
      <div className="container mx-auto mt-4">
        <div class="bg-gray-50">
          <main class="max-w-6xl mx-auto px-6">
            <div class="py-8 space-y-6">
              <div className="flex border-b-2 pb-5 items-center">
                <img
                  className="inline-block h-40 w-40 rounded-full ring-2 ring-white"
                  src={
                    currentUser.photoURL ||
                    "https://firebasestorage.googleapis.com/v0/b/greenedis.appspot.com/o/avatar%2Fkremlin.png?alt=media&token=f3e30ab9-a63d-46c8-9421-dea4b00f907a"
                  }
                  alt=""
                />
                <div className="ml-3">
                  <h3 className="text-4xl">{currentUser.displayName}</h3>
                  <div className="flex items-center font-bold text-gray-500 py-2">
                 <CgLock/>
                    <h3 className="text-gray-700 mx-1">{currentUser.uid}</h3>
                  </div>
                  {file && perc >= 0 ? (
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                        <div
                          style={{ width: `${perc}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                        ></div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <input
                        onChange={(e) => setFile(e.target.files[0])}
                        accept=".jpeg, .png, .jpg"
                        type="file"
                        className="hidden"
                        ref={fileupload}
                      />
                      <button
                        onClick={handle_upload}
                        disabled={loading}
                        className="px-3 py-2 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 "
                      >
                        {file ? "Change" : <AiOutlineCamera />}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
