const profie = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
}

const { age }: { age: number } = profie;
const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profie;