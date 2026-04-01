interface departmentTemplate {
  Cardiology: string[],
  Neurology: string[],
  Orthopedics: string[],
  Oncology: string[]
}

interface flexibleObject {
  [key: string]: string[]
}

const departments: departmentTemplate = {
  Cardiology: ["Alice", "Bob", "Carol"],
  Neurology: ["Diana", "Eve"],
  Orthopedics: ["Frank", "Grace", "Hank"],
  Oncology: ["Ivy", "Bob"],
};

function findDepartment(inputDoctor: string) {
  const staff: flexibleObject = {}

  let entries: Array<(string | string[])[]> = Object.entries(departments)

  entries.forEach(([dept, doctors]) => {
    (doctors as string[]).forEach((doctor) => {
      if (staff[doctor]) {
        staff[doctor].push(dept as string)
      } else {
        staff[doctor] = [dept as string]
      }
    })
  })
  
  return staff[inputDoctor]
}