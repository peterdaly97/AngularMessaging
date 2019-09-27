import { Conversation } from './conversation';

export const CONVERSATIONS: Conversation[] = [
    { id: 0, name: 'Chat With Mike', members: ['peterdaly', 'mike'], messages: [ 
        { id: 0, owner: 'peterdaly', message: 'What are you?' },
        { id: 1, owner: 'mike', message: 'Good, you?'} 
      ] 
    },
    { id: 1, name: 'Chat With Dave', members: ['paul mcpaul', 'Dave'], messages: [
      { id: 0, owner: 'Dave', message: 'Please pay me the money you owe me' },
      { id: 1, owner: 'Peter', message: 'No'}
    ]}
];