import React from 'react';

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
      <h2>Matheus dos Reis</h2>
      <button onClick={() => handleDownloadCurriculo(curriculoPdfUrl, 'curriculo.pdf')}>
        Baixar Currículo
      </button>
      <button onClick={() => handleDownloadCurriculo(resumePdfUrl, 'resume.pdf')}>
        Download Resume
      </button>
    </div>
  );
};

export default Inicio;
