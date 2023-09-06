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
    return 'Results-driven and detail-oriented Computer Engineering Technology graduate with a strong aptitude for developing precise and efficient solutions. Seeking to contribute technical expertise in a progressive tech company to drive innovation and maximize technical potential.';
  }

  getLocation(): string {
    return 'Des Plaines, IL 60016, USA';
  }

  getPhone(): string {
    return '(872) 985-6601';
  }

  getEmail(): string {
    return 'azarmohamed96@yahoo.com';
  }

  getEducation(): any {
    return {
      name:'DeVry University',
      location:'Chicago, IL',
      gpa: '3.29/4.0',
      graduation: '01/2021',
      course:'Bachelor of Science in Computer Engineering Technology',
      info:'The Computer Engineering Technology degree program is accredited by The Engineering Technology Accreditation Commission of ABET (ETAC of ABET) www.abet.org. ETAC of ABET promotes technical education excellence by offering programmatic accreditation to institutions that meet their quality standards.',
    }
  }

  getWorkHistory(): any[] {
    return [
      {
        position: 'Software Engineer',
        company: 'TCS',
        date: '11/2021 - Present',
        responsibilities: [
          'Played a pivotal role in the Albertsons project as a Snowflake Cloud Data Engineer and ETL Tester, contributing to the development of data processing and transformation pipelines.',
          'Received comprehensive training in Mean Stack and Spring Boot technologies, enhancing proficiency in full-stack development.',
          'Collaborated effectively with cross-functional teams to ensure seamless integration and successful execution of project tasks.'
        ]
      },
      {
        position: 'Self-Employed Rideshare Driver',
        company: 'Lyft',
        date: '06/2018 - 10/2021',
        responsibilities: [
          'Provided safe and reliable transportation to passengers...',
          'Maintained a high level of customer satisfaction.',
        ]
      },
      {
        position: 'Caregiver',
        company: 'Sahara Asian Elderly Care',
        date: '06/2016 - 04/2018',
        responsibilities: [
          'Assisted elderly residents with daily activities.',
          'Provided companionship and emotional support.',
          'Ensured a safe and comfortable environment.'
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
    return [{
      name: 'Weather App',
      purpose: 'Showcasing the current weather for searched city.',
      toolUsed: 'Angular, HTML, CSS, Public Weather Api',
      url: 'https://w4bbit.github.io/weatherApp/'
    }, {
      name: 'Azar: Active Wear',
      purpose: 'Ecommerce wesite',
      toolUsed: 'Angular, Node.js, Express.js, MongoDB, Mongoose, HTML, CSS',
      url: 'Coming Soom'
    }]
  }
}
