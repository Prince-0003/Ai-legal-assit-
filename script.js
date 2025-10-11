 // Tab functionality
        document.addEventListener('DOMContentLoaded', function() {
            const tabBtns = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active class from all buttons and contents
                    tabBtns.forEach(b => b.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));
                    
                    // Add active class to clicked button
                    btn.classList.add('active');
                    
                    // Show corresponding content
                    const tabId = btn.getAttribute('data-tab') + 'Tab';
                    document.getElementById(tabId).classList.add('active');
                });
            });
            
            // Case Analysis Form
            const caseForm = document.getElementById('caseForm');
            const analysisResult = document.getElementById('analysisResult');
            const analysisDetails = document.getElementById('analysisDetails');
            const connectLawyerBtn = document.getElementById('connectLawyerBtn');
            const newAnalysisBtn = document.getElementById('newAnalysisBtn');
            
            caseForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const caseType = document.getElementById('caseType').value;
                const caseDescription = document.getElementById('caseDescription').value.toLowerCase();
                const caseDuration = document.getElementById('caseDuration').value;
                const location = document.getElementById('location').value;
                
                // Analyze case based on keywords
                let analysisData;
                
                if (caseDescription.includes('kill') || caseDescription.includes('murder') || caseDescription.includes('homicide')) {
                    analysisData = getMurderAnalysis();
                } else if (caseDescription.includes('cheat') || caseDescription.includes('fraud') || caseDescription.includes('scam')) {
                    analysisData = getFraudAnalysis();
                } else if (caseDescription.includes('assault') || caseDescription.includes('hurt') || caseDescription.includes('attack')) {
                    analysisData = getAssaultAnalysis();
                } else if (caseDescription.includes('property') || caseDescription.includes('land') || caseDescription.includes('house')) {
                    analysisData = getPropertyAnalysis();
                } else if (caseDescription.includes('divorce') || caseDescription.includes('marriage') || caseDescription.includes('alimony')) {
                    analysisData = getDivorceAnalysis();
                } else {
                    analysisData = getGeneralAnalysis();
                }
                
                // Display analysis
                displayAnalysis(analysisData);
                
                // Show result section
                analysisResult.style.display = 'block';
                analysisResult.scrollIntoView({ behavior: 'smooth' });
            });
            
            // New Analysis button
            newAnalysisBtn.addEventListener('click', function() {
                caseForm.reset();
                analysisResult.style.display = 'none';
                document.getElementById('caseDescription').focus();
            });
            
            // Connect with lawyer button
            connectLawyerBtn.addEventListener('click', function() {
                alert('Redirecting to lawyer matching service...');
                // In a real implementation, this would redirect to a lawyer matching page
            });
            
            // Analysis data functions
            function getMurderAnalysis() {
                return {
                    title: "Murder Case Analysis",
                    sections: [
                        {
                            title: "Applicable IPC Sections",
                            items: [
                                "Section 302 - Punishment for murder",
                                "Section 301 - Culpable homicide by causing death of person other than person whose death was intended",
                                "Section 304 - Punishment for culpable homicide not amounting to murder"
                            ]
                        },
                        {
                            title: "Required Documents",
                            items: [
                                "FIR Copy",
                                "Postmortem Report",
                                "Forensic Evidence",
                                "Witness Statements",
                                "Weapon Recovery Memo (if applicable)"
                            ]
                        },
                        {
                            title: "Possible Outcomes",
                            items: [
                                "Life Imprisonment",
                                "Death Penalty (in rarest of rare cases)",
                                "Imprisonment up to 10 years (if reduced to culpable homicide)"
                            ]
                        },
                        {
                            title: "Recommended Actions",
                            items: [
                                "File FIR immediately at local police station",
                                "Preserve all evidence",
                                "Hire a criminal lawyer with murder case experience",
                                "Cooperate with police investigation"
                            ]
                        }
                    ]
                };
            }
            
            function getFraudAnalysis() {
                return {
                    title: "Fraud/Cheating Case Analysis",
                    sections: [
                        {
                            title: "Applicable IPC Sections",
                            items: [
                                "Section 420 - Cheating and dishonestly inducing delivery of property",
                                "Section 406 - Punishment for criminal breach of trust",
                                "Section 120B - Punishment of criminal conspiracy"
                            ]
                        },
                        {
                            title: "Required Documents",
                            items: [
                                "Contract/Agreement copies",
                                "Bank statements and transaction records",
                                "Communication records (emails, messages)",
                                "Identity proof of accused (if known)",
                                "Any promissory notes or cheques"
                            ]
                        },
                        {
                            title: "Possible Outcomes",
                            items: [
                                "Imprisonment up to 7 years",
                                "Monetary compensation to victim",
                                "Fine or both imprisonment and fine",
                                "Case closure if insufficient evidence"
                            ]
                        },
                        {
                            title: "Recommended Actions",
                            items: [
                                "File a complaint with local police or cyber cell (if online fraud)",
                                "Consult with a lawyer specializing in financial crimes",
                                "Gather all documentary evidence systematically",
                                "Consider civil suit for recovery of money"
                            ]
                        }
                    ]
                };
            }
            
            function getAssaultAnalysis() {
                return {
                    title: "Assault Case Analysis",
                    sections: [
                        {
                            title: "Applicable IPC Sections",
                            items: [
                                "Section 323 - Punishment for voluntarily causing hurt",
                                "Section 324 - Voluntarily causing hurt by dangerous weapons or means",
                                "Section 325 - Punishment for voluntarily causing grievous hurt",
                                "Section 354 - Assault or criminal force to woman with intent to outrage her modesty"
                            ]
                        },
                        {
                            title: "Required Documents",
                            items: [
                                "Medical examination report",
                                "Photographs of injuries",
                                "Witness statements",
                                "FIR copy",
                                "Weapon details (if any)"
                            ]
                        },
                        {
                            title: "Possible Outcomes",
                            items: [
                                "Imprisonment up to 3 years (for grievous hurt)",
                                "Fine or compensation to victim",
                                "Imprisonment up to 1 year (for simple hurt)",
                                "Case dismissal if injuries are minor and parties settle"
                            ]
                        },
                        {
                            title: "Recommended Actions",
                            items: [
                                "Get medical examination immediately",
                                "File FIR with local police",
                                "Consult with a criminal lawyer",
                                "Consider settlement if injuries are minor (through mediation)"
                            ]
                        }
                    ]
                };
            }
            
            function getPropertyAnalysis() {
                return {
                    title: "Property Dispute Analysis",
                    sections: [
                        {
                            title: "Applicable Laws",
                            items: [
                                "Transfer of Property Act, 1882",
                                "Specific Relief Act, 1963",
                                "Indian Registration Act, 1908",
                                "State-specific land revenue codes"
                            ]
                        },
                        {
                            title: "Required Documents",
                            items: [
                                "Property documents (title deed, sale deed)",
                                "Mutation records",
                                "Tax payment receipts",
                                "Survey maps and records",
                                "Succession certificate (if inherited property)"
                            ]
                        },
                        {
                            title: "Possible Outcomes",
                            items: [
                                "Declaration of title",
                                "Injunction preventing interference",
                                "Eviction of illegal occupants",
                                "Compensation for damages",
                                "Partition of property among co-owners"
                            ]
                        },
                        {
                            title: "Recommended Actions",
                            items: [
                                "Consult with a property lawyer",
                                "Verify title documents thoroughly",
                                "Consider mediation for amicable settlement",
                                "File suit in appropriate court (civil court for title disputes)"
                            ]
                        }
                    ]
                };
            }
            
            function getDivorceAnalysis() {
                return {
                    title: "Divorce/Marriage Dispute Analysis",
                    sections: [
                        {
                            title: "Applicable Laws",
                            items: [
                                "Hindu Marriage Act, 1955 (for Hindus)",
                                "Special Marriage Act, 1954 (for inter-religion marriages)",
                                "Indian Divorce Act, 1869 (for Christians)",
                                "Muslim Personal Law"
                            ]
                        },
                        {
                            title: "Required Documents",
                            items: [
                                "Marriage certificate",
                                "Proof of residence",
                                "Income documents of both parties",
                                "Details of children (if any)",
                                "Evidence supporting grounds for divorce"
                            ]
                        },
                        {
                            title: "Possible Outcomes",
                            items: [
                                "Divorce decree",
                                "Maintenance/alimony orders",
                                "Child custody arrangements",
                                "Division of marital property",
                                "Reconciliation and case dismissal"
                            ]
                        },
                        {
                            title: "Recommended Actions",
                            items: [
                                "Attempt reconciliation through counseling",
                                "Consult with a family law attorney",
                                "Gather evidence supporting your case",
                                "Consider mutual consent divorce if both parties agree"
                            ]
                        }
                    ]
                };
            }
            
            function getGeneralAnalysis() {
                return {
                    title: "General Legal Issue Analysis",
                    sections: [
                        {
                            title: "General Legal Principles",
                            items: [
                                "Every person has the right to legal remedy",
                                "Burden of proof lies on the complainant in civil cases",
                                "Presumption of innocence in criminal cases",
                                "Right to fair trial and legal representation"
                            ]
                        },
                        {
                            title: "Recommended Steps",
                            items: [
                                "Consult with a lawyer specializing in your type of case",
                                "Document all relevant facts and evidence",
                                "Understand the limitation periods for your case",
                                "Consider alternative dispute resolution methods"
                            ]
                        },
                        {
                            title: "Possible Actions",
                            items: [
                                "File a complaint with appropriate authority",
                                "Send legal notice to opposing party",
                                "File case in appropriate court",
                                "Explore settlement options"
                            ]
                        },
                        {
                            title: "Important Considerations",
                            items: [
                                "Legal proceedings can be time-consuming",
                                "Costs involved in litigation",
                                "Emotional impact of legal battles",
                                "Possibility of appeals prolonging the case"
                            ]
                        }
                    ]
                };
            }
            
            // Display analysis function
            function displayAnalysis(analysisData) {
                analysisDetails.innerHTML = '';
                
                // Add title
                const title = document.createElement('h3');
                title.textContent = analysisData.title;
                title.style.color = 'var(--primary)';
                analysisDetails.appendChild(title);
                
                // Add sections
                analysisData.sections.forEach(section => {
                    const sectionDiv = document.createElement('div');
                    sectionDiv.className = 'analysis-card';
                    
                    const sectionTitle = document.createElement('h4');
                    sectionTitle.textContent = section.title;
                    sectionDiv.appendChild(sectionTitle);
                    
                    const list = document.createElement('ul');
                    section.items.forEach(item => {
                        const listItem = document.createElement('li');
                        listItem.textContent = item;
                        list.appendChild(listItem);
                    });
                    
                    sectionDiv.appendChild(list);
                    analysisDetails.appendChild(sectionDiv);
                });
            }
        });
