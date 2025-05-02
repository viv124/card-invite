'use client'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ArrowDownTrayIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Events', href: '#events', current: false },
    // { name: 'Gallary', href: '#gallary', current: false },
    { name: 'Location', href: '#location', current: false },
    // { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// const scrollToSection = (id, number) => {
//     document.getElementById(id).scrollIntoView({ behavior: "smooth" });
// };

const scrollToSection = (id, ExtraPx) => {
    const section = document.getElementById(id);
    if (section) {
        const bodyRect = document.body.getBoundingClientRect().top + ExtraPx;
        const sectionRect = section.getBoundingClientRect().top;
        const sectionPosition = sectionRect - bodyRect;
        const offsetPosition = sectionPosition;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-[]">
            <div className="mx-auto max-w-screen-2xl py-2 px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:justify-start pt-2">
                        <div className="flex shrink-0 items-center">
                            <div className="flex" style={{ fontFamily: 'var(--font-personal-logo-short)', fontSize: '40px' }}>
                                V
                                <img
                                    alt="Your Company"
                                    src="/wedding.png"
                                    className="h-11 w-auto"
                                />
                                K
                            </div>
                            { // <div style={{ fontFamily: 'var(--font-personal-logo)', fontSize: '40px' }}>
                                //     Meet Panchal
                                // </div>
                            }
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:block ">
                        <div className="flex space-x-4 items-center tracking-[3px] " style={{ fontFamily: 'var(--font-main-global)' }}>
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        'text-[#1f2937] hover:text-gray-700 font-semibold',
                                        'rounded-md px-3 py-2 text-sm font-medium',
                                    )}
                                    onClick={() => {
                                        scrollToSection(item.href, 0)
                                    }}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <a href="/files/MIT-JAMINE.pdf" download>
                        <button
                            type="button"
                            className="relative rounded-full bg-gray-200 p-2 text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 border border-gray-800"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Download Invitation Card</span>
                            <ArrowDownTrayIcon aria-hidden="true" className="size-6" />
                        </button>
                        </a>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden border-b-2">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                'text-[#1f2937]  font-semibold hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium tracking-widest text-center',
                            )}
                            style={{ fontFamily: 'var(--font-main-global)' }}
                            onClick={() => {
                                scrollToSection(item.href, 190)
                            }}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
