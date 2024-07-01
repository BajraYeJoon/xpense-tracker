"use client";

import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TransactionType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ReactNode } from "react";

interface CreateTransactionDialogProps {
  trigger: ReactNode;
  type: TransactionType;
}

export default function CreateTransactionDialog({
  trigger,
  type,
}: CreateTransactionDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create a new{" "}
            <span
              className={cn(
                "m-1",
                type === "income" ? "text-emerald-400" : "text-rose-400"
              )}
            >
              {type}
            </span>
            transaction
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
