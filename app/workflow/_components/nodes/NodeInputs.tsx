import React from 'react';
import {Handle, Position} from "@xyflow/react";
import {cn} from "@/lib/utils";
import {TaskParam} from "@/types/taskType";
import NodeParamField from "@/app/workflow/_components/nodes/NodeParamField";

export function NodeInputs({children}: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col divide-y
        gap-2">
            {children}
        </div>
    );
}


export function NodeInput({
                              input,
                              nodeId
                          }: {
    input: TaskParam,
    nodeId: string
}) {
    return <div className="flex justify-start relative
     p-3 bg-secondary w-full">
        <NodeParamField param={input} nodeId={nodeId}/>

        {!input.hideHandle && (
            <Handle
                id={input.name}
                type="target"
                position={Position.Left}
                className={cn(
                    "!bg-muted-foreground !border-2 !border-background !-left-2 !w-4 " +
                    "!h-4")}
            />
        )}

    </div>
}


