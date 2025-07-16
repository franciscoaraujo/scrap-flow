"use client"

import React from 'react';
import {Workflow} from "@prisma/client";
import {Background, BackgroundVariant, Controls, ReactFlow, useEdgesState, useNodesState} from "@xyflow/react";
import "@xyflow/react/dist/style.css"
import {CreateFlowNode} from "@/lib/workflow/createFlowNode";
import {TaskType} from "@/types/taskType";
import NodeComponent from "@/app/workflow/_components/nodes/NodeComponent";

const nodeTypes = {
    FlowScrapeNode: NodeComponent
}

const snapGrid: [number, number] = [50, 50]

function FlowEditor({workflow}: { workflow: Workflow }) {

    const [nodes, setNodes, onNodesChange] = useNodesState([
        CreateFlowNode(TaskType.LAUNCH_BROWSER)
    ])
    const [edges, setEdges, onEdgesChange] = useEdgesState([])
    const fitViewOptions = { padding: 1, duration: 100 }

    return (
        <main className="h-full w-full">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onEdgesChange={onEdgesChange}
                onNodesChange={onNodesChange}
                nodeTypes={nodeTypes}
                snapToGrid
                snapGrid={snapGrid}
                fitViewOptions={fitViewOptions}
                fitView
            >
                <Controls position="top-left" fitViewOptions={fitViewOptions}/>
                <Background variant={BackgroundVariant.Dots} gap={12} size={1}/>
            </ReactFlow>
        </main>
    );
}

export default FlowEditor;