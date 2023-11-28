import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useRouter, usePathname } from "next-intl/client";
import { GlobeAltIcon, LanguageIcon } from "@heroicons/react/24/outline";

const language = [
  { name: "EN", value: "en" },
  { name: "VN", value: "vi" },
];

const LanguageSelector = ({ locale }: { locale: string }) => {
  const [selected, setSelected] = useState(language[0]);
  const router = useRouter();
  const pathname = usePathname();
  const handleOnChange = (selected: any) => {
    setSelected(selected);
    router.replace(pathname, { locale: selected.value });
  };

  useEffect(() => {
    const matchLang = language.find((l) => l.value == locale) ?? language[0];
    setSelected(matchLang);
  }, [locale]);

  return (
    <div className="top-16">
      <Listbox value={selected} onChange={handleOnChange}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full pr-4 cursor-default rounded-lg text-white bg-gray-800 py-2 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <LanguageIcon className="w-6 h-6" aria-hidden="true" />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="w-20 absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {language.map((language, languageIdx) => (
                <Listbox.Option
                  key={languageIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pr-10 pl-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={language}>
                  {({ selected }) => (
                    <>
                      {selected ? (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}>
                        {language.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default LanguageSelector;
