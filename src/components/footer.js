import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="bg-white border-t">
            <div className="container mx-auto">
                <div className="flex justify-between border-b py-3 md:mx-20 lg:mx-40">
                    <div>
                        <h5 className="text-base text-green-600 font-semibold tracking-wide uppercase">Location</h5>
                        <div className="text-lg capitalize font-medium text-gray-900">
                            <div>
                                C500/14, Nii Bonne Cr,
                            </div>
                            <div>
                                Dzorwulu, Accra,
                            </div>
                            <div>
                                Ghana
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-base text-green-600 font-semibold tracking-wide uppercase">Call Us</h5>
                        <h5 className="text-lg capitalize font-medium text-gray-900">+ 233 (0)55 344 3040</h5>
                    </div>
                    <div>
                        <h5 className="text-base text-green-600 font-semibold tracking-wide uppercase">Or Write</h5>
                        <h5 className="text-lg capitalize font-medium text-gray-900">training@greenedis.com</h5>
                    </div>
                </div>

            </div>
            <div className="flex justify-center items-center py-3">
                <Link className="text-green-700 px-3 py-2 mr-2 rounded">
                    <FaFacebook className="text-2xl" />
                </Link>
                <Link className="text-green-700 px-3 py-2 mr-2 rounded" >
                    <FaInstagram className="text-2xl" />
                </Link>
                <Link className="text-green-700 px-3 py-2 mr-2 rounded">
                    <FaTwitter className="text-2xl" />
                </Link>
            </div>
            <div className="flex justify-center items-center font-semibold text-gray-700 py-3">
                <h5 className="text-center"> Green Edis, All right reserved. - developed by Peniel</h5>
            </div>
        </div>
    )
}
