class SubmissionFormatter {

    static formatFullName(user) {
        return `${user.firstName} ${user.lastName}`
    }

    static formatDateOfBirth(dateOfBirth) {
        return `${dateOfBirth.day} ${dateOfBirth.month},${dateOfBirth.year}`
    }

    static formatSubjects(subjects) {
        return subjects.join(', ')
    }

    static formatHobbies(hobbies) {
        return hobbies.join(', ')
    }

    static formatPicturePath(picturePath) {
        return picturePath.split('/').pop()
    }

    static formatStateAndCity(stateAndCity) {
        return `${stateAndCity.state} ${stateAndCity.city}`
    }
}

export default SubmissionFormatter
