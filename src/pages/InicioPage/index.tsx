import React from 'react';
import { SButton } from '@/components/Buttons/SButton';
import { STitle1,STitle2,STitle3 } from './index.style';

const curriculoPdfUrl = '/curriculos/curriculo.pdf';
const resumePdfUrl = '/curriculos/resume.pdf';

const Inicio: React.FC = () => {
  const handleDownloadCurriculo = (pdfUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>

      <STitle1>Olá , sou</STitle1>

      <STitle2>Matheus dos Reis</STitle2>

      <STitle3>Um Web Developer</STitle3>
      
      <SButton onClick={() => handleDownloadCurriculo(curriculoPdfUrl, 'curriculo.pdf')}>
        Baixar Currículo
      </SButton>
      <SButton onClick={() => handleDownloadCurriculo(resumePdfUrl, 'resume.pdf')}>
        Download Resume
      </SButton>
    </div>
  );
};

export default Inicio;
