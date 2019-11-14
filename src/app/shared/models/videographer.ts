export class Videographer {
    constructor(id, firstName, lastName, location, bio, profilePictureUrl) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location,
        this.bio = bio;
        this.profilePictureUrl = profilePictureUrl
    }

    id: number;
    firstName: string;
    lastName: string;
    location: string;
    bio: string;
    profilePictureUrl: string;
}