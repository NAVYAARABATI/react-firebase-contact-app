import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to Delete Contact");
    }
  };

  return (
    <>
      <div className="flex w-full items-center justify-between rounded-lg bg-yellow p-2 sm:p-3">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
          <HiOutlineUserCircle className="shrink-0 text-4xl text-orange sm:text-5xl" />

          <div className="min-w-0 flex-1 text-black">
            <h2 className="truncate text-sm font-medium sm:text-base">
              {contact.name}
            </h2>

            <p className="truncate text-xs sm:text-sm">{contact.email}</p>
          </div>
        </div>

        <div className="ml-2 flex shrink-0 items-center gap-2 text-2xl sm:gap-3 sm:text-3xl">
          <RiEditCircleLine
            onClick={onOpen}
            className="cursor-pointer transition hover:scale-110"
          />

          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer text-orange transition hover:scale-110"
          />
        </div>
      </div>

      <AddAndUpdateContact
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
        contact={contact}
      />
    </>
  );
};

export default ContactCard;
