import React from "react"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const Timeline = () => (
  <div className="timeline py-5">
    <h2 className="section-title">Work Experience</h2>
    <div className="bottom-line"></div>
    <div className="container">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="Jul 2020 - Present"
          iconStyle={{ background: "#c9ada7", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Localisation QA tester
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sega Europe Ltd., London
          </h4>
          <p>
            Testing for linguistic correctness, identifying, reporting issues,
            suggesting fixes to defect and bugs.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="Mar 2018 - Jul 2020"
          iconStyle={{ background: "#9a8c98", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Mandarin Tutor</h3>
          <h4 className="vertical-timeline-element-subtitle">London</h4>
          <p>
            Teaching Chinese courses to children aged 3-8, creating a curriculum
            specifically for the individual and team.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="May 2015 - Nov 2017"
          iconStyle={{ background: "#4a4e69", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Assistant Manager</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Yoshino & Co. Ltd., London
          </h4>
          <p>
            Managing day to day operation of the restaurant with a welcoming
            environment, making sure all employees reach their full potential
            through constant evaluation, coaching and training.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="Nov 2014 - Apr 2015"
          iconStyle={{ background: "#4a4e69", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Sales manager</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Yoshino & Co. Ltd., London
          </h4>
          <p>Ability to work under pressure and meet daily sales targets.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="Mar 2014 - Aug 2014"
          iconStyle={{ background: "#4a4e69", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Team member</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Yoshino & Co. Ltd., London
          </h4>
          <p>
            Preparing drinks, replenishing supplies, greeting customers,
            answering to their inquiries, taking food orders, maintaining the
            food service area clean, and preparing simple dishes.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="Sep 2013 - Jan 2014"
          iconStyle={{ background: "#22223b", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Education</h3>
          <h4 className="vertical-timeline-element-subtitle">
            The English Studio Language School
          </h4>
          <p>Advanced (CEFR C1) level course</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="Jan 2013 - Jun 2013"
          iconStyle={{ background: "#c9ada7", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Administrative Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Suanhong Trading Company, Taiwan
          </h4>
          <p>
            Managing Files and Assisting with all aspects of administrative
            management, directory maintenance, equipment inventory and storage.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="Oct 2012 - Dec 2012"
          iconStyle={{ background: "#9a8c98", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Research Assistant of Dr. Jung-Jeng Su
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            ANSC National Taiwan University, Taiwan
          </h4>
          <p>
            Project: Study Of Greenhouse Gas Emission Factor From Livestock
            Wastewater Treatment
          </p>
          <p>
            Researching, collecting and analyzing data including wastewater, gas
            emission change and climate record. Monitoring wastewater quality:
            detecting BOC, COD, SS, EC Analysis marsh gas: GC-TCD/ECD
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="Jul 2011 - Jan 2012"
          iconStyle={{ background: "#4a4e69", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Laboratory Analyst
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Zhao Ding Environment Technology Co., Taiwan
          </h4>
          <p>
            Analyzing organic emissions by GC-FID according to NIOSH or OSHA
            Test Method, analyzing drinking water: Total Dissolved Solids, Total
            Suspended Solids, COD, BOD, Coliform group.
          </p>
          <p>
            Analyzing drinking water: Total Dissolved Solids, Total Suspended
            Solids, COD, BOD, Coliform group.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="2007 - 2011"
          iconStyle={{ background: "#22223b", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Education</h3>
          <h4 className="vertical-timeline-element-subtitle">
            National Formosa University, Taiwan
          </h4>
          <p>Bachelor of science, Department of Biotechnology</p>
          <p>
            Graduation practical project: Research development of simple spot
            testing method for substituted amphetamines
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  </div>
)

export default Timeline
