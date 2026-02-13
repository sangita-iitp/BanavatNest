import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LegalLayout: React.FC<{ title: string; children: React.ReactNode; lastUpdated?: string }> = ({ title, children, lastUpdated }) => (
  <div className="pt-24 pb-12 px-4 max-w-4xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-4xl font-extrabold text-[#5D3A1A] dark:text-zinc-100 mb-6">{title}</h1>
      {lastUpdated && <p className="text-gray-500 dark:text-zinc-400 mb-8">Last Updated: {lastUpdated}</p>}
      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-zinc-300">
        {children}
      </div>
    </motion.div>
  </div>
);

export const DisclaimerPage = () => (
  <LegalLayout title="Disclaimer">
    <p>
      All information provided on this website is for informational purposes only. While every effort is made to ensure that the information presented is current and accurate, BanavatNest makes no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, or suitability of the information.
    </p>
    <p>
      This website may contain information and links provided by various internal or external sources. BanavatNest does not independently verify, monitor, or guarantee the authenticity of such information and does not endorse, control, or assume responsibility for the content of any external websites or linked resources. Any reliance placed on the information available through this website is strictly at the user’s own risk.
    </p>
  </LegalLayout>
);

export const PrivacyPolicyPage = () => (
  <LegalLayout title="Privacy Policy">
    <p>
      BanavatNest Private Limited (“BanavatNest”, “we”, “our”, “us”) respects the privacy of all users, collaborators, and stakeholders who interact with our platform. This Privacy Policy describes how information shared with us is handled.
    </p>

    <h3>1. Information We May Receive</h3>
    <p>
      We may receive information that you voluntarily provide, including (but not limited to) problem statements, ideas, documents, messages, contact details, and other materials submitted through our website, email, forms, or collaboration channels.
    </p>

    <h3>2. How We Use Information</h3>
    <p>
      Information shared with BanavatNest is used solely for research discussion, problem analysis, experimentation, collaborative innovation, feasibility assessment, pilot planning, training/learning activities, and related communication.
    </p>

    <h3>3. Sharing and Disclosure</h3>
    <ul>
      <li>We do not sell submitted information to third parties.</li>
      <li>We do not disclose or share submitted information externally without prior consent, except where required by law or explicitly agreed upon for collaboration.</li>
      <li>For collaborative engagements, we may share limited information with participating team members (e.g., students, scholars, faculty collaborators) on a need-to-know basis, subject to ethical and responsible practices.</li>
    </ul>

    <h3>4. Confidentiality and Sensitive Information</h3>
    <p>
      While BanavatNest takes reasonable care to respect confidentiality, submission through the platform does not automatically create a confidential relationship. Users are encouraged not to share highly sensitive, proprietary, or confidential information unless a formal written agreement (e.g., NDA) is in place.
    </p>

    <h3>5. User Responsibilities</h3>
    <p>
      Users are responsible for ensuring that content submitted does not violate confidentiality obligations, intellectual property rights, or third-party restrictions. Do not submit trade secrets, copyrighted material, or confidential information belonging to others without authorization.
    </p>

    <h3>6. Data Protection</h3>
    <p>
      We take reasonable administrative and technical precautions to protect submitted information. However, no method of transmission or storage is completely secure; therefore, absolute security cannot be guaranteed.
    </p>

    <h3>7. Contact</h3>
    <p>
      For queries regarding this Privacy Policy, please contact:<br />
      Email: <a href="mailto:banavatnest@gmail.com" className="text-[#84CC16]">banavatnest@gmail.com</a>
    </p>
  </LegalLayout>
);

export const TermsOfUsePage = () => (
  <LegalLayout title="Terms of Use">
    <p>By accessing or using the BanavatNest platform, you agree to the following terms:</p>

    <h3>1. Purpose of the Platform</h3>
    <p>
      BanavatNest operates as a research and innovation platform. Engagements are exploratory in nature and intended to support research-led problem solving, experimentation, and innovation.
    </p>

    <h3>2. Originality of Submissions (User Declaration)</h3>
    <p>
      Users confirm that any ideas, problem statements, data, or materials shared on this platform are original to the best of their knowledge, or that they have lawful permission to share them. Users agree not to knowingly submit content copied from proprietary, copyrighted, restricted, or confidential sources.
    </p>

    <h3>3. Independent Research and Solution Development</h3>
    <p>
      BanavatNest undertakes research and experimental development based on independent analysis, scientific/technical reasoning, and collaborative effort. Unless explicitly stated otherwise, solutions proposed through the platform are developed through independent research processes (e.g., analysis, experimentation, simulation, prototyping, validation).
    </p>

    <h3>4. No Infringement Assurance</h3>
    <p>
      Users agree not to submit content that infringes intellectual property rights, trade secrets, or confidential information belonging to others. BanavatNest is not responsible for verifying the originality or ownership of user-submitted content.
    </p>

    <h3>5. Collaborative and Exploratory Nature (No Guarantee)</h3>
    <ul>
      <li>Submission of a problem statement does not guarantee a complete, correct, or implementable solution.</li>
      <li>Research and experimental development are inherently uncertain and may yield partial results, insights, or alternative directions rather than a finalized outcome.</li>
    </ul>

    <h3>6. Intellectual Property (IP) and Ownership</h3>
    <p>
      Ownership, licensing, authorship/acknowledgment, and usage rights related to submitted ideas and resulting research outputs shall be governed by mutually agreed terms or separate written agreements, where applicable. No transfer of IP or exclusivity is implied by submission alone.
    </p>

    <h3>7. Independent Similar Work Disclaimer</h3>
    <p>
      BanavatNest may be engaged in or may independently develop ideas, methods, or solutions similar to those submitted, without obligation or liability, provided no confidential or proprietary information is misused.
    </p>

    <h3>8. Confidentiality and Formal Agreements</h3>
    <p>
      Submission through the platform does not automatically establish a confidential relationship. If sensitive or proprietary disclosure is required, users should request a formal NDA or written agreement prior to sharing detailed confidential information.
    </p>

    <h3>9. Academic and Research Use</h3>
    <p>
      Ideas and problems shared on the platform may inform academic research, student projects, or exploratory studies. Any publication, presentation, or public disclosure arising from such work will follow responsible and ethical practices and, where applicable, appropriate acknowledgment and/or agreement.
    </p>

    <h3>10. Incentivized Micro-Tasks and Contributor Engagement</h3>
    <p>
      Where feasible, BanavatNest may assign well-scoped micro-problems or research tasks to students, scholars, or faculty collaborators and may provide honoraria or incentives. Terms (scope, timelines, payments, acknowledgments) may be specified separately for each engagement.
    </p>

    <h3>11. Right to Accept or Decline Engagement</h3>
    <p>
      BanavatNest reserves the right to accept, defer, or decline any submission or engagement based on feasibility, resource availability, ethical considerations, legal constraints, or alignment with its mission.
    </p>

    <h3>12. Ethical and Responsible Use</h3>
    <p>
      Users agree not to submit problems or content related to unlawful activities, misuse of technology, or unethical practices. BanavatNest upholds responsible research and innovation principles.
    </p>

    <h3>13. Limitation of Liability</h3>
    <p>
      BanavatNest shall not be held liable for any loss, damages, claims, or disputes arising from (i) the use of submitted content, (ii) reliance on research outcomes, or (iii) any third-party claims related to user submissions.
    </p>

    <h3>14. Updates to These Terms</h3>
    <p>
      BanavatNest may update these policies from time to time. Continued use of the platform after updates constitutes acceptance of the revised terms.
    </p>
  </LegalLayout>
);
