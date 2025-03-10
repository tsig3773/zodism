import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Card, { CardHeader, CardTitle, CardContent, CardFooter } from '../components/Card';
import Input, { FormControl, Label, TextArea } from '../components/Input';
import ZodiacSignSelector from '../components/ZodiacSignSelector';
import { useContacts } from '../contexts/ContactContext';
import { ZodiacSign } from '../types/zodiac';
import { zodiacSigns } from '../data/zodiacData';

const PageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.space.md};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  margin-top: ${({ theme }) => theme.space.lg};
`;

const ContactCard = styled(Card)`
  transition: transform ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const ZodiacInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  margin: ${({ theme }) => theme.space.md} 0;
`;

const ZodiacSymbol = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const NoContacts = styled.p`
  text-align: center;
  padding: ${({ theme }) => theme.space.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

const ContactsPage: React.FC = () => {
  const { contacts, addContact, deleteContact } = useContacts();
  const [showAddForm, setShowAddForm] = useState(false);
  const [name, setName] = useState('');
  const [zodiacSign, setZodiacSign] = useState<ZodiacSign | null>(null);
  const [relationship, setRelationship] = useState('');
  const [notes, setNotes] = useState('');
  
  const handleAddContact = () => {
    if (name.trim() && zodiacSign) {
      addContact({
        name,
        zodiacSign,
        relationship: relationship.trim() || undefined,
        notes: notes.trim() || undefined,
      });
      
      // Reset form
      setName('');
      setZodiacSign(null);
      setRelationship('');
      setNotes('');
      setShowAddForm(false);
    }
  };
  
  const resetForm = () => {
    setName('');
    setZodiacSign(null);
    setRelationship('');
    setNotes('');
    setShowAddForm(false);
  };
  
  return (
    <PageContainer>
      <SectionTitle>Your Contacts</SectionTitle>
      
      {!showAddForm && (
        <Button onClick={() => setShowAddForm(true)}>Add New Contact</Button>
      )}
      
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <FormControl>
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter contact name"
                fullWidth
              />
            </FormControl>
            
            <ZodiacSignSelector
              value={zodiacSign}
              onChange={setZodiacSign}
              label="Zodiac Sign"
            />
            
            <FormControl>
              <Label htmlFor="relationship">Relationship (optional)</Label>
              <Input 
                id="relationship"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                placeholder="Friend, partner, family, etc."
                fullWidth
              />
            </FormControl>
            
            <FormControl>
              <Label htmlFor="notes">Notes (optional)</Label>
              <TextArea 
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any additional information"
                fullWidth
              />
            </FormControl>
          </CardContent>
          <CardFooter>
            <Button variant="outline" onClick={resetForm}>Cancel</Button>
            <Button 
              onClick={handleAddContact}
              disabled={!name.trim() || !zodiacSign}
            >
              Add Contact
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {contacts.length === 0 && !showAddForm ? (
        <NoContacts>
          You don't have any contacts yet. Add some to keep track of your friends' zodiac signs!
        </NoContacts>
      ) : (
        <Grid>
          {contacts.map(contact => {
            const signData = zodiacSigns[contact.zodiacSign];
            
            return (
              <ContactCard key={contact.id}>
                <CardHeader>
                  <CardTitle>{contact.name}</CardTitle>
                  {contact.relationship && <p>{contact.relationship}</p>}
                </CardHeader>
                
                <CardContent>
                  <ZodiacInfo>
                    <ZodiacSymbol>{signData.symbol}</ZodiacSymbol>
                    <span>{contact.zodiacSign}</span>
                  </ZodiacInfo>
                  
                  <p><strong>Element:</strong> {signData.element}</p>
                  <p><strong>Dates:</strong> {signData.dates}</p>
                  
                  {contact.notes && (
                    <>
                      <p><strong>Notes:</strong></p>
                      <p>{contact.notes}</p>
                    </>
                  )}
                </CardContent>
                
                <CardFooter>
                  <Button 
                    variant="text" 
                    onClick={() => deleteContact(contact.id)}
                    size="small"
                  >
                    Delete
                  </Button>
                </CardFooter>
              </ContactCard>
            );
          })}
        </Grid>
      )}
    </PageContainer>
  );
};

export default ContactsPage;