import { faker } from "@faker-js/faker";
let newName = faker.internet.domainWord(10);
let newKey = faker.internet.password(10);
let newNameChange = faker.internet.color;
let SantaCookie =
  "_ym_uid=1685986829782511802; _ym_d=1685990622; _ym_isad=2; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5NTUxMTAsImlhdCI6MTY4NTk5MDYyNCwiZXhwIjoxNjg4NTgyNjI0fQ.ycPm3LO2KhmFEsW0QOPvHCuOSWF_r1o_dZGA1phW1H4; adtech_uid=970c451e-92d2-4560-937b-a90a748bb431%3Asanta-secret.ru; top100_id=t1.7627570.682147776.1685990629710; _ohmybid_cmf=2; last_visit=1685973052478%3A%3A1685991052478; t3_sid_7627570=s1.138401598.1685990629711.1685991055671.1.9";

describe("santa API", () => {
  it("Add box", () => {
    cy.request({
      method: "POST",
      headers: {
        Cookie: SantaCookie,
      },
      url: "https://santa-secret.ru/api/box",
      body: {
        email: null,
        name: newName,
        key: newKey,
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
        Cookie: SantaCookie,
      },
      url: "https://santa-secret.ru/api/box" + newKey,
      body: {
        name: newNameChange,
        picture: "cookie_star",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("Delete box", () => {
    cy.request({
      method: "DELETE",
      headers: {
        Cookie: SantaCookie,
      },
      url: "https://santa-secret.ru/api/box/" + newKey,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
