// 1
const users = [
    {name: "Andry", skills: ["evhweo", "peaf", "sdvk"], balance: 3859, friends: ["Kate", "Anna", "Tony"] },
    {name: "Kate", skills: ["eog", "peaf", "sdvk", "bkfjv", "vjifcn"], balance: 5639, friends:  ["Andry", "Anna"] },
    {name: "Anna", skills: ["evhweo", "peaf", "tyfjfkg", "asosa", "wtdb", "jfufj"], balance: 6485, friends:  ["Andry", "Kate", "Tony", "Mary"] }
];

let totalBalance = 0;

users.forEach(users => {
    totalBalance += users.balance;
});

console.log("Total balance: " + totalBalance);


// 2
const getUsersWithFriend = (users, friend) => {
    return users.filter(
      user => user.friends.indexOf(friend) !== -1
    ).map(user => user.name);
  };
  
  console.log(getUsersWithFriend(users, "Tony"));
  console.log(getUsersWithFriend(users, "Mary"));




// 3
const getNamesSortedByFriendsCount = users => {
    return users.sort((a, b) => a.friends.length - b.friends.length);
  };
  
  console.log(getNamesSortedByFriendsCount(users));

// 4
const getSkills = users => users.map(user => user.skills)
    .reduce((acc, skills) => {
        for(let skill of skills) {
            if(!acc.includes(skill)) {
                acc.push(skill);
            }
        }
        return acc;
    }, [])
    .sort();

console.log(getSkills(users));