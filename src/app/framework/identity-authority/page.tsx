import { redirect } from 'next/navigation';

export default function IdentityAuthorityRedirect() {
  redirect('/framework/identity');
}
