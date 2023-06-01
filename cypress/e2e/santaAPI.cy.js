describe.only("santa API", () => {
  beforeEach(() => {
    cy.request({
      method: "POST",
      headers: {},
      url: "https://santa-secret.ru/login",
      body: {
        email: "4932843+1@gmail.com",
        password: "GoodPassword10",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Add box", () => {
    cy.request({
      method: "POST",
      headers: {
        /* Cookie:
          "_ym_uid=1685035036523428104; _ym_d=1685035036; __upin=tTskgndEB7iuwZSlTT9v/Q; adtech_uid=a993c893-f711-4e44-a182-801a4bba29b2%3Asanta-secret.ru; top100_id=t1.7627570.2043786471.1685035102505; _ym_isad=2; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5NTU1MDYsImlhdCI6MTY4NTYzOTg4NCwiZXhwIjoxNjg4MjMxODg0fQ.JoPaxrODNEsYcekQtksOrIWPH1jP2dAb23RRxBOIKuw; _ohmybid_cmf=2; uuid=8d5ea98c0eb4bfb6%3A4; _buzz_fpc=JTdCJTIycGF0aCUyMiUzQSUyMiUyRiUyMiUyQyUyMmRvbWFpbiUyMiUzQSUyMi5zYW50YS1zZWNyZXQucnUlMjIlMkMlMjJleHBpcmVzJTIyJTNBJTIyU2F0JTJDJTIwMDElMjBKdW4lMjAyMDI0JTIwMTclM0ExOSUzQTU2JTIwR01UJTIyJTJDJTIyU2FtZVNpdGUlMjIlM0ElMjJMYXglMjIlMkMlMjJ2YWx1ZSUyMiUzQSUyMiU3QiU1QyUyMnVmcCU1QyUyMiUzQSU1QyUyMmNiOTljMzNmY2RjZjI2MzhkYThjYzc0YTIzZWMwOWIzJTVDJTIyJTJDJTVDJTIyYnJvd3NlclZlcnNpb24lNUMlMjIlM0ElNUMlMjIxMTMuMCU1QyUyMiU3RCUyMiU3RA==; last_visit=1685622014303%3A%3A1685640014303; t3_sid_7627570=s1.521300221.1685639690203.1685640014504.5.5",*/
      },
      url: "https://santa-secret.ru/api/box",
      body: {
        email: null,
        name: "{{$randomWord}}",
        key: "{{$randomWord}}",
        picture: "santa",
        usePost: false,
        useCashLimit: null,
        cashLimit: null,
        cashLimitCurrency: null,
        useWish: true,
        useCircleDraw: null,
        isInviteAfterDraw: null,
        isArchived: null,
        createAdminCard: null,
        isCreated: true,
        useNames: true,
        isPhoneRequired: false,
        logo: null,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("Change box", () => {
    cy.request({
      method: "PUT",
      headers: {
        /* Cookie:
          "_ym_uid=1685035036523428104; _ym_d=1685035036; __upin=tTskgndEB7iuwZSlTT9v/Q; adtech_uid=a993c893-f711-4e44-a182-801a4bba29b2%3Asanta-secret.ru; top100_id=t1.7627570.2043786471.1685035102505; _ym_isad=2; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5NTU1MDYsImlhdCI6MTY4NTYzOTg4NCwiZXhwIjoxNjg4MjMxODg0fQ.JoPaxrODNEsYcekQtksOrIWPH1jP2dAb23RRxBOIKuw; _ohmybid_cmf=2; uuid=8d5ea98c0eb4bfb6%3A4; _buzz_fpc=JTdCJTIycGF0aCUyMiUzQSUyMiUyRiUyMiUyQyUyMmRvbWFpbiUyMiUzQSUyMi5zYW50YS1zZWNyZXQucnUlMjIlMkMlMjJleHBpcmVzJTIyJTNBJTIyU2F0JTJDJTIwMDElMjBKdW4lMjAyMDI0JTIwMTclM0ExOSUzQTU2JTIwR01UJTIyJTJDJTIyU2FtZVNpdGUlMjIlM0ElMjJMYXglMjIlMkMlMjJ2YWx1ZSUyMiUzQSUyMiU3QiU1QyUyMnVmcCU1QyUyMiUzQSU1QyUyMmNiOTljMzNmY2RjZjI2MzhkYThjYzc0YTIzZWMwOWIzJTVDJTIyJTJDJTVDJTIyYnJvd3NlclZlcnNpb24lNUMlMjIlM0ElNUMlMjIxMTMuMCU1QyUyMiU3RCUyMiU3RA==; last_visit=1685622014303%3A%3A1685640014303; t3_sid_7627570=s1.521300221.1685639690203.1685640014504.5.5",*/
      },
      url: "https://santa-secret.ru/api/box",
      body: {
        email: null,
        name: "{{$randomWord}}",
        key: "{{key}}",
        picture: "cookie_star",
        usePost: false,
        useCashLimit: false,
        cashLimit: null,
        cashLimitCurrency: null,
        useWish: true,
        useCircleDraw: null,
        isInviteAfterDraw: null,
        isArchived: null,
        createAdminCard: null,
        isCreated: null,
        useNames: true,
        isPhoneRequired: false,
        logo: null,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("Delete box", () => {
    cy.request({
      method: "DELETE",
      headers: {
        /* Cookie:
          "_ym_uid=1685035036523428104; _ym_d=1685035036; __upin=tTskgndEB7iuwZSlTT9v/Q; adtech_uid=a993c893-f711-4e44-a182-801a4bba29b2%3Asanta-secret.ru; top100_id=t1.7627570.2043786471.1685035102505; _ym_isad=2; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5NTU1MDYsImlhdCI6MTY4NTYzOTg4NCwiZXhwIjoxNjg4MjMxODg0fQ.JoPaxrODNEsYcekQtksOrIWPH1jP2dAb23RRxBOIKuw; _ohmybid_cmf=2; uuid=8d5ea98c0eb4bfb6%3A4; _buzz_fpc=JTdCJTIycGF0aCUyMiUzQSUyMiUyRiUyMiUyQyUyMmRvbWFpbiUyMiUzQSUyMi5zYW50YS1zZWNyZXQucnUlMjIlMkMlMjJleHBpcmVzJTIyJTNBJTIyU2F0JTJDJTIwMDElMjBKdW4lMjAyMDI0JTIwMTclM0ExOSUzQTU2JTIwR01UJTIyJTJDJTIyU2FtZVNpdGUlMjIlM0ElMjJMYXglMjIlMkMlMjJ2YWx1ZSUyMiUzQSUyMiU3QiU1QyUyMnVmcCU1QyUyMiUzQSU1QyUyMmNiOTljMzNmY2RjZjI2MzhkYThjYzc0YTIzZWMwOWIzJTVDJTIyJTJDJTVDJTIyYnJvd3NlclZlcnNpb24lNUMlMjIlM0ElNUMlMjIxMTMuMCU1QyUyMiU3RCUyMiU3RA==; last_visit=1685622014303%3A%3A1685640014303; t3_sid_7627570=s1.521300221.1685639690203.1685640014504.5.5",*/
      },
      url: "https://santa-secret.ru/api/box/{{key}}",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
