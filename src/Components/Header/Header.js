import React, { useState } from 'react'
import "../Header/Header.css"
import { Cross as Hamburger } from 'hamburger-react'

export default function Header() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className='header centre'>
            <div className='headerbody'>
                <div className='headerleft'>
                    <svg width="105" height="36" fill="none" aria-labelledby="site-logo" viewBox="0 0 105 36" class="sc-dREXXX joYxef">
                        <title id="site-logo">Site logo</title><mask id="prefix__logo" width="105" height="35" x="0" y="1" maskUnits="userSpaceOnUse">
                            <path fill="#fff" fill-rule="evenodd" d="M.465 1.308h104.531V36H.465V1.308z" clip-rule="evenodd">
                            </path>
                        </mask>
                        <g mask="url(#prefix__logo)" fill="#28234A" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M17.86 35.964c6.42 0 8.034-2.592 8.034-6.144 0-4.368-3.925-5.184-7.19-5.717-2.495-.426-3.632-.64-3.632-2.166 0-1.136.99-1.563 2.605-1.563 1.98 0 2.53.569 2.714 2.237l5.21-.78c-.44-3.587-2.459-5.398-7.778-5.398-5.832 0-7.887 2.343-7.887 6.072-.036 4.83 4.512 5.327 7.887 5.895 2.091.39 2.898.746 2.898 2.13 0 1.137-.697 1.634-2.788 1.634-2.31 0-3.008-.39-3.301-2.273l-5.063.746c.477 3.8 2.715 5.327 8.291 5.327zM34.653 32.058c-2.459 0-3.339-.533-3.339-2.308 0-1.598.88-2.238 3.522-2.238h2.641v1.847c0 1.775-.88 2.699-2.824 2.699zm-2.275 3.907c2.861 0 4.145-.924 5.063-2.273v2.024h5.172V22.86c0-4.296-1.651-6.462-7.374-6.462-5.54 0-7.483 1.562-8.254 5.397l5.136.781c.33-1.633.807-2.13 2.935-2.13 2.054 0 2.385.852 2.385 2.273v1.314h-2.422c-6.566 0-8.804 1.988-8.804 6.037 0 3.977 2.018 5.895 6.163 5.895zM43.933 35.716h5.283v-27.4l-5.283 5.238v22.162zM55.673 24.139v-.959c0-1.669.77-2.806 3.081-2.806 2.238 0 2.972.96 2.972 2.806v.959h-6.053zM58.753 36c6.09 0 7.704-2.841 8.071-5.682l-5.025-.746c-.22 1.705-.55 2.593-3.045 2.593-2.531 0-3.082-1.243-3.082-2.877v-1.562h11.152v-3.41c0-4.758-1.87-7.918-8.07-7.918-6.127 0-8.218 3.196-8.218 7.244v5.114c0 3.941 2.128 7.244 8.218 7.244zM76.619 36c6.053 0 8.547-3.09 8.547-7.244v-5.114c0-4.226-2.494-7.244-8.547-7.244-6.053 0-8.474 3.018-8.474 7.244v5.114c0 4.155 2.384 7.244 8.474 7.244zm0-4.12c-2.128 0-3.192-1.1-3.192-2.876v-5.469c0-1.81 1.064-2.911 3.191-2.911 2.128 0 3.265 1.1 3.265 2.912v5.468c0 1.776-1.137 2.877-3.264 2.877zM94.601 21.817H91.77v13.787h-5.283V21.817l5.161-5.237h8.114l-5.16 5.237z">
                            </path>
                        </g>
                        <path id="color-dash" class="animatedPath" fill="#056DFF" fill-opacity="0.7" fill-rule="evenodd" d="M24.332 0L17.38 7.244h17.176L41.508 0H24.332z" clip-rule="evenodd">
                        </path>
                        <path stroke="#28234A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.218" d="M9.963 2.998L3.449 9.492h22.59l6.513-6.494H9.962z" clip-rule="evenodd">
                        </path>
                    </svg>

                    <div className='menu'>
                        <ul>
                            <li>Product</li>
                            <li>Integrations</li>
                            <li>Developers</li>
                            <li>Pricing</li>
                            <li>Enterprise</li>
                            <li>Experts</li>
                        </ul>
                    </div>
                    <div className='blog'><p>Blog</p></div>
                </div>
                <div className='mobileview'>
                    <div className='mobgit'>
                        <a href="https://github.com" aria-label="Homepage" class="anchor github" title="GitHub" style={{ fontWeight: "100" }}>
                            <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>

                            18907
                        </a>
                    </div>
                    <div className='mobmenu'>
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                    </div>
                </div>

                <div className='headerright'>
                    <a href="https://github.com" aria-label="Homepage" class="anchor github" title="GitHub" style={{ fontWeight: "100" }}>
                        <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>

                        18907
                    </a>

                    <a className='anchor login' href='/'>Login</a>
                    <a className='anchor signup' href='/'>Sign Up</a>
                </div>
            </div>
        </div>
    )
}
