"use client"

import React from 'react';
import {DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {LucideIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import {Separator} from "@/components/ui/separator";


interface Props {
    icon: LucideIcon;
    title: string;
    subTitle: string;
    iconClassName?: string;
    titleClassName?: string;
    subTitleClassName?: string;
}

function CustomDialogHeader(props: Props) {
    return (
        <DialogHeader className="py-6">
            <DialogTitle asChild>
                <div className="flex flex-col items-center gap-2 mb-2">
                    {props.icon && <props.icon size={30}
                    className={cn("stroke-primary", props.iconClassName)}
                    /> }
                    {props.title && (
                        <p className={ cn("text-x1 text-primary", props.titleClassName)}>
                            {props.title}
                        </p>
                    )}
                    {props.subTitle && (
                        <p className={ cn("text-sm text-muted-foreground", props.subTitleClassName)}>
                            {props.subTitle}
                        </p>
                    )}
                </div>
            </DialogTitle>
            <Separator />

        </DialogHeader>
    );
}

export default CustomDialogHeader;