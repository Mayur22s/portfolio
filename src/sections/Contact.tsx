import { data } from "../App";

export const Contact = () => {
    return (
        <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 border rounded">
                <div className="font-medium">Email</div>
                <div className="text-sm text-gray-600">{data.email}</div>
            </div>
            <div className="p-4 border rounded">
                <div className="font-medium">Phone</div>
                <div className="text-sm text-gray-600">{data.phone}</div>
            </div>
        </div>
    );
}
