import React from 'react'

export default function Timeline() {
  return (
    <div className="ms-5 xs:me-0 flex flex-col md:flex-row gap-y-10 items-center justify-around">
              <ul className=" flex flex-col gap-y-12 ">
                <li className="timeline-xs xs:timeline relative xs:flex gap-x-3 xs:gap-x-8 lg:gap-x-16">
                  <p className="font-semibold">شنبه</p>
                  <span className="font-semibold text-primary-b">
                    جلسه کاری
                    <span className="ps-3 xs:ps-4 text-sm text-zinc-400">
                      1404/7/24
                    </span>
                  </span>
                </li>
                <li className="timeline-xs xs:timeline relative  xs:flex gap-x-2 xs:gap-x-5 lg:gap-x-14">
                  <p className="font-semibold">یکشنبه</p>
                  <span className="font-semibold text-primary-b">
                    جلسه کاری
                    <span className="ps-2 xs:ps-4 text-sm text-zinc-400">
                      1404/7/24
                    </span>
                  </span>
                </li>
                <li className="timeline-xs xs:timeline relative  xs:flex gap-x-2 xs:gap-x-5 lg:gap-x-14">
                  <p className="font-semibold">دوشنبه</p>
                  <span className="font-semibold text-primary-b">
                    جلسه کاری
                    <span className="ps-2 xs:ps-4 text-sm text-zinc-400">
                      1404/7/24
                    </span>
                  </span>
                </li>
                <li className="timeline-xs xs:timeline relative  xs:flex gap-x-2 xs:gap-x-4 lg:gap-x-12">
                  <p className="font-semibold">سه شنبه</p>
                  <span className="font-semibold text-primary-b">
                    جلسه کاری
                    <span className="ps-2 xs:ps-4 text-sm text-zinc-400">
                      1404/7/24
                    </span>
                  </span>
                </li>
              </ul>
              <ul className="flex flex-col gap-y-12">
                <li className="timeline-xs xs:timeline relative  xs:flex gap-x-2 xs:gap-x-5 lg:gap-x-14">
                  <p className="font-semibold">چهارشنبه</p>
                  <span className="font-semibold text-primary-b">
                    جلسه کاری
                    <span className="ps-2 xs:ps-4 text-sm text-zinc-400">
                      1404/7/24
                    </span>
                  </span>
                </li>
                <li className="timeline-xs xs:timeline relative  xs:flex gap-x-2 xs:gap-x-5 lg:gap-x-14">
                  <p className="font-semibold">پنجشنبه</p>
                  <span className="font-semibold text-primary-b">
                    جلسه کاری
                    <span className="ps-2 xs:ps-4 text-sm text-zinc-400">
                      1404/7/24
                    </span>
                  </span>
                </li>
                <li className="timeline-xs xs:timeline relative  xs:flex gap-x-5 xs:gap-x-9 lg:gap-x-[4.8rem]">
                  <p className="font-semibold">جمعه</p>
                  <span className="font-semibold text-primary-b">
                    جلسه کاری
                    <span className="ps-2 xs:ps-4 text-sm text-zinc-400">
                      1404/7/24
                    </span>
                  </span>
                </li>
              </ul>
            </div>
  )
}
