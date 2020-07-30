import React, { Children } from "react"


function FormField({ value, onChange, type, name, label }) {
    switch (type) {
        case "textarea":
            return (
                <div>
                    <label>{label}
                        <textarea
                            value={value}
                            name={name}
                            onChange={onChange} />
                    </label>
                </div>
            );
        default:
            return (
                <div>
                    <label>{label}
                        <input type={type}
                            value={value}
                            onChange={onChange}
                            name={name}
                        />
                    </label>
                </div>
            );
    }
};

export default FormField;