// ------------------- Istifadəçi məlumatlarının formalaşdırılması -------------------

// 1.Ad
// 2.Soyad
// 3.Email
// 4.Ölkə
// 5.İş təcrübəsi
// 6.Yaş
// 7.Cins


class User{
    constructor(_id, _name, _surname, _email, _country, _experience, _age, _gender){
        this.Id = _id;
        this.Name = _name;
        this.Surname = _surname;
        this.Email = _email;
        this.Country = _country;
        this.Experience = _experience;
        this.Age = _age;
        this.Gender = _gender;
    }
}


// ------------------- Anket suallarının və cavablarının formalaşdırılması -------------------

// 1.Sual
// 1.Cavablar

class Question{
    constructor(_id, _question){
        this.Id = _id;
        this.Question = _question;
    }
}

let questions = new Question(1, "Sual 1")

// 1. Cavabın mətni
// 2. Cavabın İD-i
// 3. Cavabın tipi
// 3. Cavabın sətir nömrəsi


class Answer{
    constructor(_id, _text, _type, _order){
        this.Id = _id;
        this.Text = _text;
        this.Type = _type;
        this.Order = _order;
    }
}


// let anket = [
//     {
//         sualId: new Question(1, "Sual 1"),
//         cavablar:[
//             new Answer(1, "Cavab 1", "radio", 1),
//             new Answer(2, "Cavab 2", "radio", 2),
//             new Answer(3, "Cavab 3", "radio", 3),
//             new Answer(4, "Cavab 4", "radio", 4),
//         ],
//         dogruCavab: [],
//         secilmisCavablar: [],
//         istifadəçiId: new User(1, "Mehemmed", "Gardashov", "mehemmed.qardasov2003@gmail.com", "Azerbaijan", 2, 20, "Kişi") 
//     },
//     {
//         sualId: new Question(2, "Sual 2"),
//         cavablar:[
//             new Answer(1, "Cavab 1", "radio", 1),
//             new Answer(2, "Cavab 2", "radio", 2),
//             new Answer(3, "Cavab 3", "radio", 3),
//             new Answer(4, "Cavab 4", "radio", 4),
//         ],
//         dogruCavab: [],
//         secilmisCavablar: [],
//         istifadəçiId: new User(1, "Metin", "Gardashov", "metin.qardasov2003@gmail.com", "Azerbaijan", 2, 20, "Kişi")
//     },
//     {
//         sualId: new Question(3, "Sual 3"),
//         cavablar:[
//             new Answer(1, "Cavab 1", "radio", 1),
//             new Answer(2, "Cavab 2", "radio", 2),
//             new Answer(3, "Cavab 3", "radio", 3),
//             new Answer(4, "Cavab 4", "radio", 4),
//         ],
//         dogruCavab: [],
//         secilmisCavablar: [],
//         istifadəçiId: new User(1, "Musa", "Budagov", "musa.budagov2004@gmail.com", "Azerbaijan", 1, 19, "Kişi")
//     }
// ];


let anket = [
    {
        suallar: [
            {
                sual: {
                    Id: 1,
                    Questuoin: "Sual 1"
                },
                cavablar: [
                    {
                        Id: 1,
                        text: "Cavab 1",
                        type: "radio",
                        order: 1
                    },
                    {
                        Id: 2,
                        text: "Cavab 2",
                        type: "radio",
                        order: 2
                    }
                ],
                dogruCavablar: [1, 2],
                secilmisCavablar: [2, 3],
            },
            {
                sual: {
                    Id: 1,
                    Questuoin: "Sual 1"
                },
                cavablar: [
                    {
                        Id: 1,
                        text: "Cavab 1",
                        type: "radio",
                        order: 1
                    },
                    {
                        Id: 2,
                        text: "Cavab 2",
                        type: "radio",
                        order: 2
                    }
                ],
                dogruCavablar: [1, 2],
                secilmisCavablar: [2, 3],
            }
        ],
        istifadeci: {
            Id: 1,
            Name: "Mehemmed",
            Surname: "Gardashov",
            Email: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            Country: "Azerbaijan",
            Experience: 2,
            Age: 20,
            Gender: "Kişi"
        }
    }
]