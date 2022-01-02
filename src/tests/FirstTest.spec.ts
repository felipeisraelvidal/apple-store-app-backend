import { User } from '@models/User';

test('is should be ok', () => {
    const user = new User();
    user.name = 'John Doe';
    user.email = 'johndoe@email.com';

    expect(user.name).toEqual('John Doe');
});
