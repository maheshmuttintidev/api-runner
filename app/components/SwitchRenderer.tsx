import React from "react";

export const SwitchRenderer = ({ data, setData = () => {} }: any) => {
  return (
    <div className="">
      {Object.entries(data)
        ?.filter(
          ([key, componentData]: any) =>
            componentData?.component_name === "switch"
        )
        ?.map(([key, componentData]: any, index: any) => {
          const label =
            componentData?.label ||
            key
              ?.split("_")
              ?.map((item: any) => item?.at(0)?.toUpperCase() + item?.slice(1))
              .join(" ");
          return (
            <div
              className="flex flex-col gap-2 w-1/2"
              key={`settings_form_switch_field_${key}_${index}`}
            >
              <p>{label}</p>
              <label
                // htmlFor={key}
                className="relative inline-flex items-center cursor-pointer"
              >
                <input
                  type={componentData?.component_data_type}
                  title={label}
                  checked={componentData?.value}
                  className="sr-only peer"
                  placeholder={label}
                  onChange={(event) => {
                    console.log("🚀 ~ SwitchRenderer ~ event:", event);
                    const { checked } = event.target;
                    console.log("🚀 ~ SwitchRenderer ~ value:", checked);
                    setData((prevState: any) => ({
                      ...prevState,
                      [key]: { ...prevState[key], value: checked },
                    }));
                  }}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
              </label>
            </div>
          );
        })}
    </div>
  );
};
