import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { db } from "./config/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactCard from "./Components/ContactCard";
import AddAndUpdateContact from "./Components/AddAndUpdateContact";
import NotFoundContact from "./Components/NotFoundContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    try {
      const contactsRef = collection(db, "contacts");

      const unsubscribe = onSnapshot(contactsRef, (snapshot) => {
        const contactLists = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setContacts(contactLists);
      });

      return () => unsubscribe();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value.toLowerCase();

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value)
      );

      setContacts(filteredContacts);
    });
  };

  return (
    <>
      <div className="mx-auto w-full max-w-md px-4 sm:px-6">
        <Navbar />

        <div className="flex items-center gap-2">
          <div className="relative flex flex-grow items-center">
            <FiSearch className="absolute left-2 text-2xl text-white sm:text-3xl" />

            <input
              onChange={filterContacts}
              type="text"
              placeholder="Search Contact..."
              className="h-10 w-full rounded-md border border-white bg-transparent pl-10 text-white outline-none placeholder:text-gray-300"
            />
          </div>

          <AiFillPlusCircle
            onClick={onOpen}
            className="cursor-pointer text-4xl text-white transition hover:scale-105 sm:text-5xl"
          />
        </div>

        <div className="mt-4 flex flex-col gap-3">
          {contacts.length === 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>

      <AddAndUpdateContact
        isOpen={isOpen}
        onClose={onClose}
      />

      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;