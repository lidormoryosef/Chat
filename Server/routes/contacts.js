const contactsController = require('../controllers/contacts');
const chatsController = require('../controllers/chats');
const express=require('express');
var router=express.Router();
router.route('/:id').get(chatsController.getMessagesAndContactById);
router.route('/:id').delete(chatsController.deleteMessagesById);
router.route('/:id/Messages').post(chatsController.addMessage);
router.route('/:id/Messages').get(chatsController.getMessagesById);
router.route('/').get(contactsController.creationOfContacts);
router.route('/').post(contactsController.addContact);
module.exports = router;