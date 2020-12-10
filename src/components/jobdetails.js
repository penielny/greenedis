import React, { useEffect, useState } from "react";
import { getJobPost } from "../contexts/store";
import ApplyModal from "./applymodal";
import Loading from "./loading";

export default function JobDetails({ match, ...props }) {
    const [data, setData] = useState()
    const [applyModal, setApplyModal] = useState(false)
    useEffect(() => {
        getJobPost(match.params.id).then(
            data => {
                if (data.exists) {
                    setData(data.data())
                }
            }
        )
    }, [])
    return (
        <>
            {
                data ?
                    <div className="bg-white">
                        {applyModal && <ApplyModal doc={match.params.id} data={data} dismiss={setApplyModal} />}
                        <main class="max-w-2xl lg:max-w-6xl mx-auto px-6">
                            <article class="border-t-2 border-gray-100 grid py-12 lg:grid-cols-3 lg:gap-16">
                                <div class="hidden lg:block">
                                    <aside class="sticky top-6 rounded-lg bg-gray-50 p-8">
                                        <div class="-my-4 divide-y-2 divide-gray-100">
                                            <dl class="divide-y-2 divide-gray-100">
                                                <div class="py-4">
                                                    <dt class="sr-only">Employment type</dt>
                                                    <dl class="flex items-start space-x-2 text-sm leading-5">
                                                        <svg
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            class="h-5 w-5 text-gray-400"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                                                clip-rule="evenodd"
                                                            ></path>
                                                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15a24.98 24.98 0 01-8-1.308z"></path>
                                                        </svg>
                                                        <span class="text-gray-800">{data.type}</span>
                                                    </dl>
                                                </div>
                                                <div class="py-4">
                                                    <dt class="sr-only">Location</dt>
                                                    <dl class="flex items-start space-x-2 text-sm leading-5">
                                                        <svg
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            class="h-5 w-5 text-gray-400"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                                clip-rule="evenodd"
                                                            ></path>
                                                        </svg>
                                                        <div>
                                                            <div class="text-gray-500">{data.location}</div>
                                                        </div>
                                                    </dl>
                                                </div>
                                                <div class="py-4">
                                                    <dt class="sr-only">Salary</dt>
                                                    <dl class="flex items-start space-x-2 text-sm leading-5">
                                                        <svg
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            class="h-5 w-5 text-gray-400"
                                                        >
                                                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                                                clip-rule="evenodd"
                                                            ></path>
                                                        </svg>
                                                        <div style={{ fontVariantNumeric: "tabular-nums" }}>
                                                            <div class="text-gray-800">{`GHS ${data.ammount}`}</div>
                                                        </div>
                                                    </dl>
                                                </div>
                                            </dl>
                                            <div class="py-4">
                                                <button onClick={()=>setApplyModal(true)} class="inline-block rounded-md bg-green-900 px-4 py-2.5 text-base leading-6 font-semibold text-white">
                                                    Apply for this job
                      </button>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                                <div class="col-span-2 space-y-12">
                                    <div class="space-y-8">
                                        <div class="space-y-2">
                                            <h1 class="text-3xl leading-9 font-bold text-gray-900 sm:text-4xl sm:leading-10">
                                                {data.title}
                                            </h1>
                                            <p class="text-lg leading-7 text-gray-500">
                                               {data.brief}
                    </p>
                                        </div>
                                        <div class="flow-root lg:hidden">
                                            <div class="-my-4">
                                                <dl class="sm:grid sm:grid-cols-2">
                                                    <div class="py-2 border-b border-gray-100">
                                                        <dt class="sr-only">Employment type</dt>
                                                        <dl class="flex items-start space-x-2 text-sm leading-5">
                                                            <svg
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                class="h-5 w-5 text-gray-400"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                                                    clip-rule="evenodd"
                                                                ></path>
                                                                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15a24.98 24.98 0 01-8-1.308z"></path>
                                                            </svg>
                                                            <span class="text-gray-800">{data.type}</span>
                                                        </dl>
                                                    </div>

                                                    <div class="py-4 border-b border-gray-100">
                                                        <dt class="sr-only">Location</dt>
                                                        <dl class="flex items-start space-x-2 text-sm leading-5">
                                                            <svg
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                class="h-5 w-5 text-gray-400"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                                    clip-rule="evenodd"
                                                                ></path>
                                                            </svg>
                                                            <div>
                                                                <div class="text-gray-500">{data.location}</div>
                                                            </div>
                                                        </dl>
                                                    </div>
                                                    <div class="py-4 border-b border-gray-100">
                                                        <dt class="sr-only">Salary</dt>
                                                        <dl class="flex items-start space-x-2 text-sm leading-5">
                                                            <svg
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                class="h-5 w-5 text-gray-400"
                                                            >
                                                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                                                    clip-rule="evenodd"
                                                                ></path>
                                                            </svg>
                                                            <div style={{ fontVariantNumeric: "tabular-nums" }}>
                                                                <div class="text-gray-800">
                                                                   {`GHS ${data.ammount}`}
                              </div>
                                                            </div>
                                                        </dl>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="prose">
                                        {data.discription}
                                    </div>
                                    <div>
                                        <button onClick={()=>setApplyModal(true)} class="inline-block rounded-md bg-green-900 px-4 py-2.5 text-base leading-6 font-semibold text-white">
                                            Apply for this job
                  </button>
                                    </div>
                                </div>
                            </article>
                        </main>
                    </div>
                    :
                   <Loading/>
            }

        </>
    );
}
