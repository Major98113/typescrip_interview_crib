// create unique type for identification something
type Branded<T, BTT extends string | symbol> = T & {
    readonly [key in BTT]: BTT
}
type UserId = Branded<string, 'UserId'>
type GroupId = Branded<string, 'GroupId'>
type User = {
    id: UserId;
    name: string;
    age?: number;
}
type Group = {
    id: GroupId;
    description: string;
}

// get something by userId and GroupId
const getSomething = ( user: UserId, group: GroupId ): any => {}

const user1: User = {
    id: '1234' as UserId,
    name: "Daria",
    age: 24
}

const group1: Group = {
    id: '5678' as GroupId,
    description: 'bla bla bla'
}

// getSomething(group1.id, user1.id) // Error
getSomething(user1.id, group1.id) // Success