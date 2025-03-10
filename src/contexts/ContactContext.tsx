import React, { createContext, useContext, ReactNode } from 'react';
import { Contact } from '../types/zodiac';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

interface ContactContextType {
  contacts: Contact[];
  addContact: (contact: Omit<Contact, 'id'>) => void;
  updateContact: (id: string, updatedContact: Partial<Omit<Contact, 'id'>>) => void;
  deleteContact: (id: string) => void;
  getContactById: (id: string) => Contact | undefined;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [contacts, setContacts] = useLocalStorage<Contact[]>('zodism-contacts', []);

  const addContact = (contact: Omit<Contact, 'id'>) => {
    setContacts(prev => [...prev, { ...contact, id: uuidv4() }]);
  };

  const updateContact = (id: string, updatedContact: Partial<Omit<Contact, 'id'>>) => {
    setContacts(prev => 
      prev.map(contact => 
        contact.id === id ? { ...contact, ...updatedContact } : contact
      )
    );
  };

  const deleteContact = (id: string) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const getContactById = (id: string) => {
    return contacts.find(contact => contact.id === id);
  };

  return (
    <ContactContext.Provider value={{ 
      contacts, 
      addContact, 
      updateContact, 
      deleteContact, 
      getContactById 
    }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContacts must be used within a ContactProvider');
  }
  return context;
};