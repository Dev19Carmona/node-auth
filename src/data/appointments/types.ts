import { TypeAppointmentEntity } from "../../domain/entities/type-appointments.entity";

export const typesAppointments:{[key: string]: TypeAppointmentEntity} = {
    banar: {
      nombre: "Baño",
      tipo: "Servicio de higiene",
      duracion: 60,
      id: 1,
      isRemove: false
    },
    consulta_general: {
      nombre: "Consulta General",
      tipo: "Consulta médica",
      duracion: 30,
      id: 2,
      isRemove: false
    },
    vacunacion: {
      nombre: "Vacunación",
      tipo: "Consulta médica",
      duracion: 20,
      id: 3,
      isRemove: false
    },
    desparasitacion: {
      nombre: "Desparasitación",
      tipo: "Consulta médica",
      duracion: 15,
      id: 4,
      isRemove: false
    },
    cirugia: {
      nombre: "Cirugía",
      tipo: "Procedimiento quirúrgico",
      duracion: 120,
      id: 5,
      isRemove: false
    },
    consulta_especialista: {
      nombre: "Consulta con Especialista",
      tipo: "Consulta médica",
      duracion: 45,
      id: 6,
      isRemove: false
    },
    urgencia: {
      nombre: "Urgencia",
      tipo: "Consulta médica",
      duracion: 30,
      id: 7,
      isRemove: false
    },
    chequeo_dental: {
      nombre: "Chequeo Dental",
      tipo: "Consulta médica",
      duracion: 25,
      id: 8,
      isRemove: false
    },
    analisis_clinicos: {
      nombre: "Análisis Clínicos",
      tipo: "Consulta médica",
      duracion: 30,
      id: 9,
      isRemove: false
    },
    estetica: {
      nombre: "Estética",
      tipo: "Servicio de higiene",
      duracion: 90,
      id: 10,
      isRemove: false
    },
    toma_muestra: {
      nombre: "Toma de Muestra",
      tipo: "Consulta médica",
      duracion: 15,
      id: 11,
      isRemove: false
    },
    control_posoperatorio: {
      nombre: "Control Postoperatorio",
      tipo: "Consulta médica",
      duracion: 20,
      id: 12,
      isRemove: false
    },
    ultrasonido: {
      nombre: "Ultrasonido",
      tipo: "Procedimiento diagnóstico",
      duracion: 40,
      id: 13,
      isRemove: false
    },
    radiografia: {
      nombre: "Radiografía",
      tipo: "Procedimiento diagnóstico",
      duracion: 30,
      id: 14,
      isRemove: false
    }
  };

export const typesAppointmentsArray = ():TypeAppointmentEntity[]=>{

return Object.values(typesAppointments) 
}