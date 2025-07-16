"use client"
import React, {useCallback} from 'react';

import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Layers2Icon, Loader2} from "lucide-react";
import CustomDialogHeader from "@/components/CustomDialogHeader";
import {useForm} from "react-hook-form";
import {createWorkflowSchema, CreateWorkflowSchemaType} from '@/schema/workflow';

import {zodResolver} from "@hookform/resolvers/zod";

import {toast} from "sonner"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {useMutation} from "@tanstack/react-query";
import {CreateWorkflow} from "@/action/workflows/createWorkflow";

function CreateWorkflowDialog({triggerText}: {
    triggerText?: string }) {

    const [open, setOpen] = React.useState(false);

    const form = useForm<CreateWorkflowSchemaType>({
        resolver: zodResolver(createWorkflowSchema),
        defaultValues: {},
    })

    const {mutate, isPending} = useMutation({
        mutationFn: CreateWorkflow,
        onSuccess: () => {
            toast.success("Workflow created!", {id: "create-workflow-"});
        },
        onError: () => {
            toast.error("Failed to create workflow", {id: "create-workflow-"});
        },
    })

    const onSubmit = useCallback((values: CreateWorkflowSchemaType) => {
        toast.loading("Creating new workflow", {id: "create-workflow-"})
        mutate(values)
    }, [mutate])

    return (
        <div>
            <Dialog open={open}
                    onOpenChange={(open) => {
                        form.reset();
                        setOpen(open)
                    }}
            >
                <DialogTrigger asChild>
                    <Button>{triggerText ?? "Create workflow"}</Button>
                </DialogTrigger>
                <DialogContent className="px-0">
                    <CustomDialogHeader
                        icon={Layers2Icon}
                        title="Create workflow"
                        subTitle="Start building your workflow"
                    />
                    <div className="p-6">
                        <Form {...form}>
                            <form className="space-y-8 w-full"
                                  onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField control={form.control}
                                           name="name"
                                           render={({field}) => (
                                               <FormItem>
                                                   <FormLabel className="flex gap-1 items-center">
                                                       Name
                                                       <p className="text-xs text-primary">(required)</p>
                                                   </FormLabel>
                                                   <FormControl>
                                                       <Input {...field} />
                                                   </FormControl>
                                                   <FormDescription>
                                                       Choose a descriptive and unique name
                                                   </FormDescription>
                                               </FormItem>
                                           )}
                                />
                                <FormField control={form.control}
                                           name="description"
                                           render={({field}) => (
                                               <FormItem>
                                                   <FormLabel className="flex gap-1 items-center">
                                                       Description
                                                       <p className="text-xs text-muted-foreground">(optional)</p>
                                                   </FormLabel>
                                                   <FormControl>
                                                       <Textarea className="resize-none" {...field} />
                                                   </FormControl>
                                                   <FormDescription>
                                                       Provide a brief description of what your workflow does.
                                                       <br/> This is optional but can help you remember the
                                                       workflow&apos;s purpose.
                                                   </FormDescription>
                                               </FormItem>
                                           )}
                                />

                                <Button type="submit" className="w-full" disabled={isPending}>
                                    {!isPending && "Procced"}
                                    {isPending && <Loader2 className="animated-spin"/>}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default CreateWorkflowDialog;