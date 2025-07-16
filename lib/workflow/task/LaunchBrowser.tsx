import {TaskParamType, TaskType} from "@/types/taskType";
import {GlobeIcon, LucideProps} from "lucide-react";

export const LaunchBrowserTask = {
    type: TaskType.LAUNCH_BROWSER,
    label: "Launch browser",
    icon: (props: LucideProps) => (
        <GlobeIcon className="stroke-pink-500"{...props}/>
    ),
    isEntryPoint: true,
    inputs:[
        {
            name: "Website Url",
            type:TaskParamType.STRING,
            helperText: "eg: https://www.google.com",
            required: true,
            hideHandle: true
        }
    ]
}