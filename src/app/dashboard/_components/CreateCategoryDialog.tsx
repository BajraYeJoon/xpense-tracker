"use client";

import { TransactionType } from "@/lib/types";
import {
  CreateCategorySchemaType,
  CreateCategorySchema,
} from "@/schemas/categories";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CircleOffIcon, CrossIcon, PlusSquareIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

interface CreateCategoryDialogProps {
  type: TransactionType;
}

function CreateCategoryDialog({ type }: CreateCategoryDialogProps) {
  const [open, setOpen] = React.useState(false);
  const form = useForm<CreateCategorySchemaType>({
    resolver: zodResolver(CreateCategorySchema),
    defaultValues: {
      type,
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          className="flex border-separate items-center justify-start rounded-none border-b p-4 text-muted-foreground"
        >
          <PlusSquareIcon className="mr-2 h-4 w-4" />
          Create new Category
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create
            <span
              className={cn(
                "m-1",
                type === "income" ? "text-green-500" : "text-red-500"
              )}
            >
              {type}
            </span>
          </DialogTitle>
          <DialogDescription>
            Categories help you organize your transactions. You can create a new
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} defaultValue={""} />
                  </FormControl>
                  <FormDescription>
                    Provide a name for the category
                  </FormDescription>
                </FormItem>
              )}
            ></FormField>

            <FormField
              control={form.control}
              name="icon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Icon</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant={"outline"} className="h-auto w-full">
                          {form.watch("icon") ? (
                            <div className="flex flex-col items-center justify-center gap-2">
                              <span className="text-5xl" role="img">
                                {field.value}
                              </span>
                              <p className="text-xs text-muted-foreground">
                                Click to select
                              </p>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center justify-center gap-2">
                              <CircleOffIcon className="h-10 w-10" />
                              <p className="text-xs text-muted-foreground">
                                Click to select
                              </p>
                            </div>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <Picker
                          data={data}
                          onEmojiSelect={(emoji: { native: string }) => {
                            field.onChange(emoji.native);
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormDescription>
                    Give your category an icon to make it stand out
                  </FormDescription>
                </FormItem>
              )}
            ></FormField>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateCategoryDialog;
