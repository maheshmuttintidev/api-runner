import React from "react";

export const InputRenderer = ({ data, setData = () => {} }: any) => {
  return (
    <div className="w-full">
      {Object.entries(data)
        ?.filter(
          ([key, componentData]: any) =>
            componentData?.component_name === "input_field"
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
              className="flex flex-col gap-2  w-1/2"
              key={`settings_form_input_field_${key}_${index}`}
            >
              <label htmlFor={key}>{label}</label>
              <input
                type={componentData?.component_data_type}
                title={label}
                min={0}
                value={componentData?.value}
                className="px-2 py-2 border border-1 rounded-sm"
                placeholder={label}
                onChange={(event) => {
                  const { value } = event.target;
                  setData((prevState: any) => ({
                    ...prevState,
                    [key]: { ...prevState[key], value: value },
                  }));
                }}
              />
            </div>
          );
        })}
    </div>
  );
};
