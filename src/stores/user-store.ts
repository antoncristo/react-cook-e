import { type User } from '@cooke/types';
import { observable } from '@legendapp/state';

export const userStore = observable<User | undefined>(undefined);
