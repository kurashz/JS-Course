function canAccessWebsite(age){
    if (age < 18) {
        return false;
    } return true;
}

console.log(canAccessWebsite(16));

const canAccessWebsite2 = age => age < 18 ? 'No' : 'Yes';
console.log(canAccessWebsite2(2));