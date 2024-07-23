import { SubjectCredits } from '@/types';
import { useState, useEffect } from 'react';

export const useSubjects = () => {
    const [subjects, setSubjects] = useState<SubjectCredits[]>(() => {
        if (typeof window !== 'undefined') {
            const storedSubjects = localStorage.getItem('subjects');
            return storedSubjects ? JSON.parse(storedSubjects) : [];
        }
        return [];
    });

    const [sortMethod, setSortMethod] = useState<'credits' | 'semester' | 'name'>('credits');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('subjects', JSON.stringify(subjects));
        }
    }, [subjects]);

    const addSubject = (subject: SubjectCredits) => {
        setSubjects((prevSubjects) => {
            const updatedSubjects = [...prevSubjects, subject];
            return sortSubjects(updatedSubjects, sortMethod);
        });
    };

    const updateSubject = (id: string, updatedSubject: SubjectCredits) => {
        setSubjects((prevSubjects) => {
            const updatedSubjects = prevSubjects.map((subject) =>
                subject.id === id ? updatedSubject : subject
            );
            return sortSubjects(updatedSubjects, sortMethod);
        });
    };

    const removeSubject = (id: string) => {
        setSubjects((prevSubjects) => {
            const updatedSubjects = prevSubjects.filter(
                (subject) => subject.id !== id
            );
            return sortSubjects(updatedSubjects, sortMethod);
        });
    };

    const toggleSubjectSelection = (id: string) => {
        setSubjects((prevSubjects) => {
            const updatedSubjects = prevSubjects.map((subject) =>
                subject.id === id
                    ? { ...subject, isSelected: !subject.isSelected }
                    : subject
            );
            return sortSubjects(updatedSubjects, sortMethod);
        });
    };

    const sortSubjects = (subjects: SubjectCredits[], method: 'credits' | 'semester' | 'name') => {
        switch (method) {
            case 'semester':
                return subjects.sort((a, b) => {
                    if (a.semester !== b.semester) {
                        return (a.semester || 0) - (b.semester || 0); // Sort by semester in ascending order
                    }
                    return a.subjectName.localeCompare(b.subjectName); // Sort lexicographically by name within the same semester
                });
            case 'name':
                return subjects.sort((a, b) => a.subjectName.localeCompare(b.subjectName)); // Sort lexicographically by name
            case 'credits':
            default:
                return subjects.sort((a, b) => {
                    if (a.credits !== b.credits) {
                        return b.credits - a.credits; // Sort by credits in descending order
                    }
                    return a.subjectName.localeCompare(b.subjectName); // Sort lexicographically by name
                });
        }
    };

    const sortBySemester = () => {
        setSortMethod('semester');
        setSubjects((prevSubjects) => sortSubjects(prevSubjects, 'semester'));
    };

    const sortByNames = () => {
        setSortMethod('name');
        setSubjects((prevSubjects) => sortSubjects(prevSubjects, 'name'));
    };

    const sortByCredits = () => {
        setSortMethod('credits');
        setSubjects((prevSubjects) => sortSubjects(prevSubjects, 'credits'));
    };

    return {
        subjects,
        addSubject,
        updateSubject,
        removeSubject,
        toggleSubjectSelection,
        sortBySemester,
        sortByNames,
        sortByCredits,
    };
};