import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  getFullName(): string {
    return 'Azar Ansar';
  }

  getTitle(): string {
    return 'Full-Stack Software Engineer';
  }

  getSummary(): string {
    return 'Versatile software engineer with expertise in full-stack development, cloud computing, and leadership. Proven problem solver. Passionate about technology and committed to continuous learning and growth.';
  }

  getLocation(): string {
    return 'Des Plaines, IL 60016, USA';
  }

  getEmail(): string {
    return 'azarmohamed96@yahoo.com';
  }

  getEducation(): any {
    return {
      name: 'DeVry University',
      location: 'Chicago, IL',
      graduation: '01/2021',
      course: 'Bachelor of Science in Computer Engineering Technology',
      info: 'The Computer Engineering Technology degree program is accredited by The Engineering Technology Accreditation Commission of ABET (ETAC of ABET) www.abet.org. ETAC of ABET promotes technical education excellence by offering programmatic accreditation to institutions that meet their quality standards.',
    }
  }

  getWorkHistory(): any[] {
    return [
      {
        position: 'Fullstack Developer',
        company: 'Stratus Networks',
        date: '04/2024 - Current',
        responsibilities: [
          'Developed and maintained full-stack applications using Spring Boot for backend development and Angular for frontend interfaces.',
          'Designed and optimized complex SQL queries for MySQL database management, improving the efficiency of data retrieval and updates.',
          'Collaborated with multiple departments, particularly the billing department, to gather requirements and implement solutions that streamline business processes.',
          'Managed version control and code collaboration using GitHub, ensuring smooth code deployments and integration.',
          'Contributed to the design and development of features related to billing and payments, enhancing the overall accuracy and speed of the billing systems.'
        ]
      },
      {
        position: 'FullStack Developer',
        company: 'TCS',
        date: '10/2021 - 12/2023',
        responsibilities: [
          'Developed a dynamic web application using the Mean Stack, showcasing full stack expertise in MongoDB, Express.js, Angular, AWS, and Node.js.',
          'Contributed to a Spring Boot project, leveraging Java for backend development and enhancing system functionalities.',
          'Spearheaded end-to-end data engineering processes for Albertsons Group of Companies, advancing from an ETL Tester.',
          'Utilized Azure Cloud, Snowflake, MySQL, Jira, CI/CD, Confluence, and Git for robust ETL testing and data optimization.'
        ]
      },
      {
        position: 'Inventory Control Specialist',
        company: 'Jared The Galleria of Jewelry',
        date: '10/2017 - 05/2018',
        responsibilities: [
          'Managed inventory levels and restocking.',
          'Performed regular audits to maintain accuracy.',
          'Collaborated with sales and management teams.'
        ]
      }
    ];
  }


  getProjects(): any[] {
    return [
      {
        name: 'Weather App',
        purpose: 'Showcasing the current weather for searched city.',
        toolUsed: 'Angular, HTML, CSS, Public Weather Api',
        url: 'https://w4bbit.github.io/weatherApp/'
      }, {
        name: 'Azar: Active Wear',
        purpose: 'E-Commerce wesite',
        toolUsed: 'Angular, Node.js, Express.js, MongoDB, Mongoose, HTML, CSS',
        url: 'https://azar-eta.vercel.app/'
      }]
  }
}
