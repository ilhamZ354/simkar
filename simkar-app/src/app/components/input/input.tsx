import { Input } from "@material-tailwind/react";

export default function InputType (props : any) {
    const { type, size, label, name, variant, value, onChange } = props

    return (
        <div className="mb-6">
            <Input
                type={type}
                size={size}
                label={label}
                variant={variant}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}