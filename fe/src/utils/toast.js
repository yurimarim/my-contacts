import EventManager from '../lib/EventManager';

export default function toast({ type, text, duration }) {
  EventManager.emit('addtoast', { type, text, duration });
}
