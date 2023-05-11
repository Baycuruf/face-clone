import { useField } from "formik";
import React, { useEffect, useState } from "react";
import classNames from "classnames";

function Input({ label, type = "text", ...props }) {
  const [field,meta,helpers] = useField(props)
  console.log(meta.value);
  console.log(helpers.value);
  const [show, setShow] = useState(false);
  const [inputType, setType] = useState(type);

  useEffect(() => {
    if (show) {
      setType("text");
    } else if (type === "password") {
      setType("password");
    }
  }, [show, type]);
  return (
    <label className="relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400">
      <input
        type={inputType}
        className={classNames({
          "px-2 outline-none text-xs bg-transparent w-full h-[38px]": true,
          "pt-[10px]": field.value,
        })}
        {...props}
        {...field}
      />
      <small className={classNames({
        "absolute  left-[9px] cursor-text pointer-events-none text-xs text-gray-400 -translate-y-1/2 transition-all " : true,
        "text-xs top-1/2": !field.value,
        "text-[10px] top-2.5": field.value
      })}>
        {label}
      </small>
      {type === "password" && field.value && (
        <div
          onClick={() => setShow((show) => !show)}
          className="h-full flex items-center text-sm font-semibold pr-2 cursor-pointer select-none"
        >
          {show ? "Gizle" : "Göster"}
        </div>
      )}
    </label>
  );
}

export default Input;