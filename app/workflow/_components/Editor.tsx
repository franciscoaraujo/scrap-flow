"use client"

import React from 'react';
import {Workflow} from "@prisma/client";
import {ReactFlowProvider} from "@xyflow/react";
import FlowEditor from "@/app/workflow/_components/FlowEditor";
import TopBar from "@/app/workflow/_components/topbar/TopBar";

function Editor({workflow}: { workflow: Workflow }) {
    return (
        <ReactFlowProvider>
            <div className="flex flex-col h-full w-full overflow-hidden">
                <TopBar title="Workflow editor" subtitle={workflow.name}/>
                <section className="flex h-full overflow-auto">
                    <FlowEditor workflow={workflow}/>
                </section>
            </div>
        </ReactFlowProvider>
    );
}

export default Editor;