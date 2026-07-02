import { faker } from '@faker-js/faker';

export class FakerUtils {

    generateRandomEmail(): string {
        return faker.internet.email();
    }

    generateRandomPassword(): string {
        return faker.internet.password();
    }   
    
    generateRandomFirstName(): string {
        return faker.person.firstName();
    }  
    
    generateRandomLastName(): string {
        return faker.person.lastName();
    }

    generateRandomPhoneNumber(): string {
        return faker.phone.number();
    }


}

