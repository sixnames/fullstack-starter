import path from "path";
import fs from 'fs-extra';

const createProject = async (projectName:string) => {
  const sourcePath = path.join(__dirname, `../template`);
  const destinationPath = path.resolve(projectName);
  
  await fs.mkdirp(destinationPath).catch((e) => {
    console.log(e, 'Directory creation error');
  });
  
  await fs.copy(sourcePath, destinationPath).catch((e)=>{
    console.log(e, 'Project copy error');
  });
};

export default createProject;
