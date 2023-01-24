import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((tmp) => {
      console.log(`${tmp[0].body} ${tmp[1].firstName} ${tmp[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
// tmp is computer reponse
