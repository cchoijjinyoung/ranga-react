const person = {
    name: 'Topy Choi',
    age: 30,
    address: {
        city: 'Seoul',
        country: 'Korea'
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavaScript() {
    return (
        <>
            <div>
                {person.name}
            </div>
            <div>
                {person.age}
            </div>
            <div>
                {person.address.city}
            </div>
            <div>
                {person.profiles[0]}
            </div>
            <div>
                {person.printProfile()}
            </div>
        </>
    )
}